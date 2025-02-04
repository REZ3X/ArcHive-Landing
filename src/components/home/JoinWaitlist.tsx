import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, Variants } from 'framer-motion';

interface JoinWaitlistProps {
  mounted: boolean;
  fadeIn: Variants;
}

const JoinWaitlist = ({ mounted, fadeIn }: JoinWaitlistProps) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/joinWaitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Failed to join waitlist');
      }
    } catch (error) {
      console.error('Failed to join waitlist', error);
    }
  };

  return (
    <section className="py-12">
      {!submitted ? (
        <motion.form
          className="max-w-md mx-auto"
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 2.4 }}
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter your email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300"
          >
            Join Waitlist
          </button>
        </motion.form>
      ) : (
        <motion.p
          className="max-w-md mx-auto text-white"
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 2.4 }}
        >
          Thank you for joining the waitlist! We'll keep you updated on our progress.
        </motion.p>
      )}
    </section>
  );
};

export default JoinWaitlist;