"use client";

import { Trophy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface RaffleModalProps {
  isRaffleModalOpen: boolean;
  setIsRaffleModalOpen: (open: boolean) => void;
  raffleForm: {
    name: string;
    email: string;
    company: string;
    industry: string;
    softwareDescription: string;
  };
  handleFormChange: (field: string, value: string) => void;
  handleRaffleSubmit: (e: React.FormEvent) => void;
}

export default function RaffleModal({
  isRaffleModalOpen,
  setIsRaffleModalOpen,
  raffleForm,
  handleFormChange,
  handleRaffleSubmit,
}: RaffleModalProps) {
  return (
    <Dialog open={isRaffleModalOpen} onOpenChange={setIsRaffleModalOpen}>
      <DialogContent className="sm:max-w-[600px] bg-white border-0 rounded-none">
        <DialogHeader className="text-left pb-4">
          <div className="mb-0">
            <DialogTitle className="text-2xl font-bold text-gray-900 mb-1">
              Join the Free Software Raffle
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Enter for your chance to win custom construction software
            </DialogDescription>
          </div>
        </DialogHeader>

        <form onSubmit={handleRaffleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-900"
              >
                Your Name *
              </label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={raffleForm.name}
                onChange={(e) => handleFormChange("name", e.target.value)}
                required
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="company"
                className="text-sm font-semibold text-gray-900"
              >
                Company Name *
              </label>
              <Input
                id="company"
                placeholder="Enter your company name"
                value={raffleForm.company}
                onChange={(e) => handleFormChange("company", e.target.value)}
                required
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-900"
            >
              Email Address *
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={raffleForm.email}
              onChange={(e) => handleFormChange("email", e.target.value)}
              required
              className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="industry"
              className="text-sm font-semibold text-gray-900"
            >
              Industry *
            </label>
            <Input
              id="industry"
              placeholder="e.g., Steel Construction, General Contracting, Electrical"
              value={raffleForm.industry}
              onChange={(e) => handleFormChange("industry", e.target.value)}
              required
              className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="software"
              className="text-sm font-semibold text-gray-900"
            >
              Describe the software you would want built if you won *
            </label>
            <Textarea
              id="software"
              placeholder="Tell us about the construction software solution you need. What challenges would it solve? What features would be most important?"
              value={raffleForm.softwareDescription}
              onChange={(e) =>
                handleFormChange("softwareDescription", e.target.value)
              }
              required
              rows={4}
              className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 resize-none"
            />
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-4 border-l-4 border-orange-500">
            <div className="flex items-start space-x-3">
              <Trophy className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  What You Could Win
                </h4>
                <p className="text-sm text-gray-700">
                  Custom construction management software worth up to $50,000,
                  built specifically for your company's needs by our expert
                  team.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 transition-all duration-200 hover:shadow-lg"
            >
              Enter Raffle
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsRaffleModalOpen(false)}
              className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-6"
            >
              Cancel
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            By entering, you agree to our terms and conditions. Winner will be
            announced on September 30th, 2025.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
