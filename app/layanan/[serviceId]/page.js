import { services, serviceDetails } from '../../../data/servicesData';
import ServiceDetailClient from '../../../components/ServiceDetailClient';

export async function generateStaticParams() {
  return services.map((service) => ({
    serviceId: service.id,
  }));
}

export default async function ServiceDetailPage({ params }) {
  const { serviceId } = await params;
  const detail = serviceDetails[serviceId];
  const serviceColor = services.find(s => s.id === serviceId)?.color || 'from-cyan-500 to-blue-600';

  return (
    <ServiceDetailClient
      serviceId={serviceId}
      detail={detail}
      serviceColor={serviceColor}
      services={services}
    />
  );
}
