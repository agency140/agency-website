import React from 'react';
import { footerLinks } from '../../config/footer';

export function FooterLinks() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {footerLinks.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
            {section.title}
          </h3>
          <ul className="mt-4 space-y-3">
            {section.links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}