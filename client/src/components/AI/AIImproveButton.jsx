import { useState } from "react";
import { Sparkles } from "lucide-react";
import api from "../../services/api";
import { toast } from "react-hot-toast";

function AIImproveButton({ text, type, onImproved }) {
  const [loading, setLoading] = useState(false);

  const improve = async () => {
    if (!text?.trim()) {
      toast.error(`Please enter ${type} first.`);
      return;
    }

    try {
      setLoading(true);

      const { data } = await api.post("/improve", {
        text,
        type,
      });

      onImproved(data.improved);

      toast.success(`${type} improved successfully!`);
    } catch (err) {
      console.error(err);
      toast.error("Failed to improve text");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={improve}
      disabled={loading}
      className="mt-2 flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-white transition hover:bg-violet-700 disabled:bg-gray-400"
    >
      <Sparkles size={18} />
      {loading ? "Improving..." : "Improve with AI"}
    </button>
  );
}

export default AIImproveButton;