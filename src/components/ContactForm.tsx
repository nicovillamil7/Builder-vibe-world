import { useState } from "react";
import { PrimaryButton } from "@/components/ui/custom-buttons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

const ContactForm = ({
  title = "Get Your Project Estimate",
  subtitle = "Tell us about your project and we'll provide a detailed estimate",
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    sqft: "",
    timeline: "",
    message: "",
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Quote Request Submitted!",
      description:
        "We'll contact you within 24 hours with your personalized quote.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      sqft: "",
      timeline: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-red-800">
          {title}
        </CardTitle>
        <p className="text-center text-gray-600">{subtitle}</p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
                placeholder="(305) 477-4402"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company (Optional)</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                placeholder="ABC Construction"
              />
            </div>
          </div>

          {/* Project Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="projectType">Project Type *</Label>
              <Select
                onValueChange={(value) =>
                  handleInputChange("projectType", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="renovation">Renovation</SelectItem>
                  <SelectItem value="new-construction">
                    New Construction
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="sqft">Square Footage *</Label>
              <Select
                onValueChange={(value) => handleInputChange("sqft", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select square footage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-500">0 - 500 sq ft</SelectItem>
                  <SelectItem value="500-1000">500 - 1,000 sq ft</SelectItem>
                  <SelectItem value="1000-2500">1,000 - 2,500 sq ft</SelectItem>
                  <SelectItem value="2500-5000">2,500 - 5,000 sq ft</SelectItem>
                  <SelectItem value="5000+">5,000+ sq ft</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Project Timeline</Label>
            <Select
              onValueChange={(value) => handleInputChange("timeline", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="When do you plan to start?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">ASAP</SelectItem>
                <SelectItem value="1-month">Within 1 month</SelectItem>
                <SelectItem value="3-months">Within 3 months</SelectItem>
                <SelectItem value="6-months">Within 6 months</SelectItem>
                <SelectItem value="planning">Just planning</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Project Details</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Tell us more about your flooring project, preferred materials, and any specific requirements..."
              className="min-h-[100px]"
            />
          </div>

          <PrimaryButton
            type="submit"
            className="w-full py-3 text-lg font-semibold"
          >
            Get My Estimate
          </PrimaryButton>

          <p className="text-sm text-gray-500 text-center">
            We'll contact you within 24 hours with your personalized estimate
            and next steps.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;