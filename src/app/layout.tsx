import type { Metadata } from "next";
// Removing unused import
// import { Inter } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from 'antd';

// Define the metadata for the site
export const metadata: Metadata = {
  title: "Archive - Creator Management",
  description: "Find and manage influencers for your marketing campaigns",
};

// Custom styling for Ant Design
const theme = {
  token: {
    colorPrimary: '#1677ff',
    borderRadius: 6,
    fontFamily: 'SF Pro Display, SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* SF Pro font */}
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/sf-pro-display" />
      </head>
      <body className="text-slate-900 bg-gray-100">
        <ConfigProvider theme={theme}>
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
} 