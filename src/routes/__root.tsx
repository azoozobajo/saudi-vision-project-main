import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Saudi Football Model: A Proposal to SAFF" },
      {
        name: "description",
        content:
          "A national plan to build the football development system Saudi Arabia deserves, submitted to the Secretary General of the Saudi Arabian Football Federation, April 2026.",
      },
      { name: "author", content: "Saudi Youth Football Development Proposal" },
      { property: "og:title", content: "Saudi Football Model: A Proposal to SAFF" },
      {
        property: "og:description",
        content:
          "Six pillars. One integrated system. The plan to build the football infrastructure that produces results in 2034 and beyond.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Saudi Football Model: A Proposal to SAFF" },
      { name: "description", content: "A professional proposal website for Saudi Arabia's national football development plan." },
      { property: "og:description", content: "A professional proposal website for Saudi Arabia's national football development plan." },
      { name: "twitter:description", content: "A professional proposal website for Saudi Arabia's national football development plan." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0b88cca0-a11c-4b8a-a53d-1683bbdf5242/id-preview-5eebc41c--a43fb596-285a-4a82-83e0-9dd0bf88ae91.lovable.app-1777319577598.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0b88cca0-a11c-4b8a-a53d-1683bbdf5242/id-preview-5eebc41c--a43fb596-285a-4a82-83e0-9dd0bf88ae91.lovable.app-1777319577598.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Tajawal:wght@300;400;500;700;900&family=Space+Mono:wght@400;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
