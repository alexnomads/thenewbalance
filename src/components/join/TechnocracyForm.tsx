import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  city: z.string().min(1, "City is required").max(100, "City must be less than 100 characters"),
  skills: z.string().min(1, "Please list your skills").max(200, "Skills must be less than 200 characters"),
  availability: z.string().min(1, "Availability is required").max(100, "Availability must be less than 100 characters"),
  role: z.enum(["auditor", "moderator", "designer", "participant"], {
    required_error: "Please select a role",
  }),
});

type FormData = z.infer<typeof formSchema>;

interface TechnocracyFormProps {
  onBack: () => void;
}

export const TechnocracyForm = ({ onBack }: TechnocracyFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      city: "",
      skills: "",
      availability: "",
      role: undefined,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Technocratic Democracy Form Submission:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center animate-fade-in">
        <Card className="p-12 bg-card/80 backdrop-blur">
          <CheckCircle2 className="h-16 w-16 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl font-bold font-heading mb-4">Thank You!</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Your application to join Technocratic Democracy has been received. We'll connect you with opportunities soon.
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
          Help government get smarter
        </h2>
        <p className="text-lg text-muted-foreground">
          Volunteer: audit, prototype, moderate, or run a local trial.
        </p>
      </div>

      <Card className="p-8 mb-8 bg-card/80 backdrop-blur">
        <h3 className="text-xl font-bold font-heading mb-4">What people can do</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-secondary">•</span>
            <span>Audit public algorithms and publish short accessible reports</span>
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span>
            <span>Join micro-deliberations or be a participant in a pilot voting round</span>
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span>
            <span>Prototype interactive visualizations for budgets and contracts</span>
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span>
            <span>Translate technical docs into plain language for local groups</span>
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
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City *</FormLabel>
                  <FormControl>
                    <Input placeholder="Your city" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Skills *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Data analysis, policy research, UX design" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="availability"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Availability *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 5 hours/week, weekends only" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Choose Role *</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-2">
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="auditor" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Auditor</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="moderator" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Moderator</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="designer" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Designer</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="participant" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Participant</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4 pt-4">
              <Button type="button" variant="outline" onClick={onBack}>
                Back
              </Button>
              <Button type="submit" className="flex-1">
                Submit Application
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
};
