import { Leaf, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-heading text-lg font-bold text-foreground">
                Raghav Ji Agro Seeds
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              India's trusted partner for superior quality hybrid and improved seed varieties. Empowering farmers since decades.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold text-foreground uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                <span>9450707369</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                <span>raghavjiagroseeds</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                <span>Vill. Bhagatpurwa, Acharamau, Lucknow</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold text-foreground uppercase tracking-wider">
              Office Locations
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>C 18/225, Street No. 86, Aavith Avenue, Himayat Nagar, Hyderabad (T.S.) 500029</p>
              <p>House No. 66/113, PB Road, Daddapet, Ranibennuar-581115, Karnataka</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Raghav Ji Agro Seeds Pvt. Ltd. All rights reserved. | www.raghavjiseeds.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
