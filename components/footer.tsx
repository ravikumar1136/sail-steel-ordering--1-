import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} SAIL - Salem Steel Plant. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <div className="flex items-center space-x-4">
            <Link
              href="mailto:contact@sailsalem.com"
              className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              contact@sailsalem.com
            </Link>
            <Link
              href="tel:+919876543210"
              className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              +91 98765 43210
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
