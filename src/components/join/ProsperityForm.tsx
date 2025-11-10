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
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  location: z.string().min(1, "Location is required").max(100, "Location must be less than 100 characters"),
  role: z.enum(["organizer", "researcher", "donor", "tech-volunteer"], {
    required_error: "Please select a role",
  }),
  interest: z.string().max(500, "Plan/interest must be less than 500 characters").optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ProsperityFormProps {
  onBack: () => void;
}

export const ProsperityForm = ({ onBack }: ProsperityFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      location: "",
      role: undefined,
      interest: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Shared Prosperity & Freedom Form Submission:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center animate-fade-in">
        <Card className="p-12 bg-card/80 backdrop-blur">
          <CheckCircle2 className="h-16 w-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl font-bold font-heading mb-4">Thank You!</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Your application to support Shared Prosperity & Freedom has been received. We'll be in touch about local pilots.
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
          Build dignity into policy
        </h2>
        <p className="text-lg text-muted-foreground">
          Volunteer, donate, or design a local pilot.
        </p>
      </div>

      <Card className="p-8 mb-8 bg-card/80 backdrop-blur">
        <h3 className="text-xl font-bold font-heading mb-4">What people can do</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-accent">•</span>
            <span>Join or host local pilot programs for basic income models</span>
          </li>
          <li className="flex gap-2">
            <span className="text-accent">•</span>
            <span>Map local needs and local delivery partners</span>
          </li>
          <li className="flex gap-2">
            <span className="text-accent">•</span>
            <span>Provide technical help: enrollment UX, privacy-preserving identity, encrypted communication</span>
          </li>
          <li className="flex gap-2">
            <span className="text-accent">•</span>
            <span>Build evaluation plans: metrics that focus on dignity and resilience</span>
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
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location *</FormLabel>
                  <FormControl>
                    <Input placeholder="City, State/Region" {...field} />
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
                  <FormLabel>Role *</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-2">
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="organizer" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Organizer</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="researcher" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Researcher</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="donor" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Donor</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="tech-volunteer" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Tech Volunteer</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="interest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brief Plan or Interest</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your ideas or what you'd like to contribute..."
                      className="resize-none min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Optional - Share your vision or specific interests</FormDescription>
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
