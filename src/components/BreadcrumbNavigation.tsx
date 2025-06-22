import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href: string;
}

const BreadcrumbNavigation = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' }
  ];

  let currentPath = '';
  pathnames.forEach((pathname) => {
    currentPath += `/${pathname}`;
    const label = pathname.charAt(0).toUpperCase() + pathname.slice(1);
    breadcrumbs.push({ label, href: currentPath });
  });

  if (breadcrumbs.length <= 1) return null;

  // Generate breadcrumb structured data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://genesisstoneusa.com/"
      },
      ...breadcrumbs.map((breadcrumb, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": breadcrumb.label,
        "item": `https://genesisstoneusa.com${breadcrumb.href}`
      }))
    ]
  };

  return (
    <nav className="bg-gray-50 py-3" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.href} className="flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              {index === 0 && <Home className="h-4 w-4 mr-1" />}
              {index < breadcrumbs.length - 1 ? (
                <>
                  <Link 
                    to={breadcrumb.href} 
                    className="text-gray-600 hover:text-[rgb(138,0,0)] transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{breadcrumb.label}</span>
                  </Link>
                  <meta itemProp="position" content={String(index + 1)} />
                  <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
                </>
              ) : (
                <>
                  <span className="text-gray-900 font-medium" itemProp="name">{breadcrumb.label}</span>
                  <meta itemProp="position" content={String(index + 1)} />
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default BreadcrumbNavigation;