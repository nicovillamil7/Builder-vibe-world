
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const location = useLocation();
  const isSpanish = location.pathname.startsWith('/es');

  const toggleLanguage = () => {
    if (isSpanish) {
      // Switch to English - remove /es prefix
      const englishPath = location.pathname.replace('/es', '') || '/';
      window.location.href = englishPath;
    } else {
      // Switch to Spanish - add /es prefix
      const spanishPath = '/es' + location.pathname;
      window.location.href = spanishPath;
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">
        {isSpanish ? 'EN' : 'ES'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
