import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Home, Mail, Phone, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
const BeeSchool = () => {
  return <div className="min-h-screen bg-background">
      {/* Simple Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            RCBA
          </Link>
          <Link to="/">
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Spring 2026 Beekeeping School
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Our comprehensive beekeeping school is currently in session!
            </p>

            <Alert className="max-w-md mx-auto bg-destructive/10 border-destructive/30">
              <AlertCircle className="h-4 w-4 text-destructive" />
              <AlertDescription className="text-destructive font-semibold">
                Registration is now closed.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* How to Register Card */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">How to Register</CardTitle>
              <CardDescription>Follow these simple steps to secure your spot</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</span>
                <p className="text-foreground">Download and fill out the registration form completely and clearly.</p>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <p className="text-foreground mb-2">Submit your form in one of two ways:</p>
                  <div className="ml-6 space-y-2">
                    <p className="text-muted-foreground">
                      <strong>By Mail:</strong> Send completed form with check to Rutherford County Beekeepers Association (RCBA)<br />
                      <strong className="text-foreground">RCBA / 459 Railroad Ave. Rutherfordton, NC 28139</strong>
                    </p>
                    <p className="text-muted-foreground">
                      <strong>By Email:</strong> Scan and send to{" "}
                      <a href="mailto:rutherfordcountyncbeekeepers@gmail.com" className="text-primary hover:underline">
                        rutherfordcountyncbeekeepers@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</span>
                <p className="text-foreground">Upon receipt, we will contact you with further instructions.</p>
              </div>
            </CardContent>
          </Card>

          {/* Important Information */}
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong className="block mb-1">About Pre-Registration</strong>
                If you submit without payment, you will be pre-registered. With limited seats, PAID registrations take priority. We'll keep you updated if the class is filling up.
              </AlertDescription>
            </Alert>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong className="block mb-1">Refund Policy</strong>
                Registration fees are refundable up to 7 days before the school starts.
              </AlertDescription>
            </Alert>
          </div>

          {/* Class Location & Schedule */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Class Location & Schedule</CardTitle>
              <CardDescription>Rutherford County Administration Offices</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <p className="text-foreground font-medium">289 N Main St, Rutherfordton, NC 28139</p>
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">4 Weekly Sessions • 8:00 AM – 12:00 PM</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• January 24, 2026</li>
                    <li>• January 31, 2026</li>
                    <li>• February 7, 2026</li>
                    <li>• February 14, 2026</li>
                  </ul>
                </div>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.8!2d-81.9577!3d35.3692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859f5c5c5c5c5c5%3A0x0!2s289%20N%20Main%20St%2C%20Rutherfordton%2C%20NC%2028139!5e0!3m2!1sen!2sus!4v1704000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rutherford County Administration Offices Location"
                />
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Questions?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:rutherfordcountyncbeekeepers@gmail.com" className="hover:text-primary transition-colors">
                  rutherfordcountyncbeekeepers@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:864-921-7032" className="hover:text-primary transition-colors">
                  864-921-7032
                </a>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>;
};
export default BeeSchool;