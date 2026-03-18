import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const RSVPForm = () => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<"yes" | "no" | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const ref = useScrollReveal<HTMLFormElement>();
  const successRef = useScrollReveal<HTMLDivElement>();

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
      <div ref={successRef} data-reveal="scale" className="bg-card rounded-xl p-10 border border-border text-center">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
          Thank You, {name}!
        </h3>
        <p className="font-body text-muted-foreground text-sm">
          {attendance === "yes"
            ? "We can't wait to celebrate with you!"
            : "We'll miss you, but thank you for letting us know."}
        </p>
      </div>
    );
  }

  return (
    <form
      ref={ref}
      data-reveal="fade-up"
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
            className={`flex-1 py-3 rounded-lg border font-body text-sm tracking-wide rsvp-option ${
              attendance === "yes"
                ? "selected"
                : "bg-background text-muted-foreground border-border"
            }`}
          >
            Joyfully Accept
          </button>
          <button
            type="button"
            onClick={() => setAttendance("no")}
            className={`flex-1 py-3 rounded-lg border font-body text-sm tracking-wide rsvp-option ${
              attendance === "no"
                ? "selected"
                : "bg-background text-muted-foreground border-border"
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
    </form>
  );
};

export default RSVPForm;
