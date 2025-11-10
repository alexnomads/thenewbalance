import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  contributionType: z.enum(["code", "data", "money", "advice"], {
    required_error: "Please select a contribution type",
  }),
  link: z.string().url("Please enter a valid URL").or(z.literal("")),
  description: z.string().max(200, "Description must be less than 200 characters").optional(),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the license terms",
  }),
});

type FormData = z.infer<typeof formSchema>;

interface OpenSourceFormProps {
  onBack: () => void;
}

export const OpenSourceForm = ({ onBack }: OpenSourceFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      contributionType: undefined,
      link: "",
      description: "",
      termsAccepted: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('open_source_contributions')
        .insert({
          name: data.name,
          email: data.email,
          contribution_type: data.contributionType,
          link: data.link,
          description: data.description || "",
          terms_accepted: data.termsAccepted,
        });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Contribution submitted!",
        description: "Thank you for contributing to open-source capitalism.",
      });
    } catch (error) {
      console.error("Error submitting contribution:", error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your contribution. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const description = form.watch("description");
  const charCount = description?.length || 0;

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center animate-fade-in">
        <Card className="p-12 bg-card/80 backdrop-blur">
          <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold font-heading mb-4">Thank You!</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Your contribution to Open-Source Capitalism has been received. We'll be in touch soon.
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={onBack} variant="outline">
              Submit Another
            </Button>
            <Button asChild>
              <a href="/">Back to Home</a>
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">
          Add your contribution to the commons
        </h2>
        <p className="text-lg text-muted-foreground">
          Pick one way to help — code, data, money, or advice.
        </p>
      </div>

      <Card className="p-8 mb-8 bg-card/80 backdrop-blur">
        <h3 className="text-xl font-bold font-heading mb-4">What people can do</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Contribute code: open issues, submit pull requests, review docs on GitHub</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Share data: publish anonymized datasets with clear licenses</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Offer legal or tax templates for cooperative ownership</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Seed a cooperative fund or micro-grant pool (small, transparent pledges)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Test transparent dividend models and report on outcomes</span>
          </li>
        </ul>
      </Card>

      <Card className="p-8 bg-card/80 backdrop-blur">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contributionType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Contribution Type *</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-2">
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="code" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Code</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="data" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Data</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="money" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Money</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="advice" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Advice</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Link</FormLabel>
                  <FormControl>
                    <Input type="url" placeholder="https://github.com/..." {...field} />
                  </FormControl>
                  <FormDescription>Link to your repository, dataset, or resource</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Briefly describe your contribution..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {charCount}/200 characters
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="termsAccepted"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="cursor-pointer">
                      I agree to share my contribution under an open license *
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <div className="flex gap-4 pt-4">
              <Button type="button" variant="outline" onClick={onBack}>
                Back
              </Button>
              <Button type="submit" className="flex-1" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Contribution"}
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
};
