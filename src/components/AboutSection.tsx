import { Target, Eye, Award, Users } from "lucide-react";

const stats = [
  { icon: Award, label: "Years Experience", value: "45+" },
  { icon: Users, label: "Happy Farmers", value: "10K+" },
  { icon: Target, label: "Seed Varieties", value: "100+" },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-muted py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              About Raghav Ji Agro Seeds
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Raghav Ji Agro Seeds Pvt. Ltd. is focused in research, development, production, processing and marketing of seeds in India. Our Company breeder Mr. S.K. Reddey has 45+ years of working experience in grain and vegetable seeds production.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We have well-equipped edge technology and an intensive research team dedicated to developing superior quality hybrid seeds that improve the lives of farming communities across India.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-lg bg-background p-4 text-center card-shadow">
                  <Icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <p className="font-heading text-2xl font-bold text-foreground">{value}</p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-background p-6 card-shadow">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                  <Eye className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">Our Vision</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To empower the farmer with best processed seeds and fulfil the aspirations of the farmers by achieving optimum production and contribute in making India a prosperous nation.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-6 card-shadow">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                  <Target className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">Our Mission</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To provide quality base seeds in agriculture, work under our value system. We shall strive to secure resources that influence agriculture in achieving seeds quality and production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
