import React, { ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, icon, children }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-brand-red h-full">
      <h3 className="text-brand-dark font-display text-lg font-medium mb-4 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      <div className="text-gray-600 space-y-2">
        {children}
      </div>
    </div>
  );
};