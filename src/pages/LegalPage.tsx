import React from 'react';
import { Text } from '../components/atoms/Text';

export const LegalPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Text variant="h1" className="text-3xl font-bold text-emerald-900 mb-6 text-center">Legal Information</Text>
      <Text className="text-gray-700 leading-relaxed">
        This is a placeholder for legal information. You can add your terms of service, privacy policy, and other legal documents here.
      </Text>
    </div>
  );
};
