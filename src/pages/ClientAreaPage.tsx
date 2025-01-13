import React, { useState, useEffect } from 'react';
import { Text } from 'src/components/atoms';
import { Layout } from 'src/components/Layout';
import { fetchClientArea } from 'src/services/dataService';

interface ClientAreaProps {
  message: string;
}

export const ClientAreaPage: React.FC = () => {
  const [clientArea, setClientArea] = useState<ClientAreaProps | null>(null);

  useEffect(() => {
    fetchClientArea().then(setClientArea).catch(console.error);
  }, []);

  return (
    <Layout>
      <Text variant="h1" className="text-3xl font-bold text-emerald-900 mb-6 text-center">
        Client Area
      </Text>
      {clientArea && (
        <Text className="text-gray-700 leading-relaxed">{clientArea.message}</Text>
      )}
    </Layout>
  );
};
