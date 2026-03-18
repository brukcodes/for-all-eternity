import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const RSVPForm = () => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<"yes" | "no" | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !attendance) {
      toast.error("Please fill in all fields");
      return;
    }
    setSubmitted(true);
    toast.success("Thank you for your response! 💕");
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card rounded-xl p-10 border border-border text-center"
      >
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
          Thank You, {name}!
        </h3>
        <p className="font-body text-muted-foreground text-sm">
          {attendance === "yes"
            ? "We can't wait to celebrate with you!"
            : "We'll miss you, but thank you for letting us know."}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="bg-card rounded-xl p-8 md:p-10 border border-border space-y-6 text-left"
    >
      <div>
        <label className="font-body text-sm text-muted-foreground tracking-wide block mb-2">
          Your Name
        </label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          className="bg-background font-body"
        />
      </div>

      <div>
        <label className="font-body text-sm text-muted-foreground tracking-wide block mb-3">
          Will you attend?
        </label>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setAttendance("yes")}
            className={`flex-1 py-3 rounded-lg border font-body text-sm tracking-wide transition-all duration-300 ${
              attendance === "yes"
                ? "bg-primary text-primary-foreground border-primary shadow-md"
                : "bg-background text-muted-foreground border-border hover:border-primary/50"
            }`}
          >
            Joyfully Accept
          </button>
          <button
            type="button"
            onClick={() => setAttendance("no")}
            className={`flex-1 py-3 rounded-lg border font-body text-sm tracking-wide transition-all duration-300 ${
              attendance === "no"
                ? "bg-primary text-primary-foreground border-primary shadow-md"
                : "bg-background text-muted-foreground border-border hover:border-primary/50"
            }`}
          >
            Respectfully Decline
          </button>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full font-body tracking-wider uppercase text-sm py-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
      >
        Send RSVP
      </Button>
    </motion.form>
  );
};

export default RSVPForm;
