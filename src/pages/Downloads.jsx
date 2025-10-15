import SubPageHero from '../components/basic/SubPageHero';
import Mission from "../components/about/Mission";

import FinalCTA from "../components/home/FinalCTA";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FileDownloadGrid from "../components/downloads/FileDownloadGrid";

function Downloads() {
  // 测试数据 - 之后从 Supabase 获取
  const mockDownloads = [
    {
      version: 'v2.5',
      name: 'Product Catalog 2024',
      size: '15.2 MB',
      type: 'PDF',
      date: '2024-10-05',
      url: '/files/product-catalog-2024.pdf',
      filename: 'product-catalog-2024.pdf'
    },
    {
      version: 'v2.4',
      name: 'Brand Guidelines',
      size: '8.7 MB',
      type: 'PDF',
      date: '2024-10-01',
      url: '/files/brand-guidelines.pdf',
      filename: 'brand-guidelines.pdf'
    },
    {
      version: 'v3.1',
      name: 'Fashion Lookbook Fall 2024',
      size: '42.3 MB',
      type: 'PDF',
      date: '2024-09-15',
      url: '/files/lookbook-fall-2024.pdf',
      filename: 'lookbook-fall-2024.pdf'
    },
    {
      version: 'v3.0',
      name: 'Fashion Lookbook Summer 2024',
      size: '38.9 MB',
      type: 'PDF',
      date: '2024-09-10',
      url: '/files/lookbook-summer-2024.pdf',
      filename: 'lookbook-summer-2024.pdf'
    },
    {
      version: 'v1.8',
      name: 'Company Profile',
      size: '5.4 MB',
      type: 'PDF',
      date: '2024-08-20',
      url: '/files/company-profile.pdf',
      filename: 'company-profile.pdf'
    },
    {
      version: 'v1.2',
      name: 'Sustainability Report 2024',
      size: '12.1 MB',
      type: 'PDF',
      date: '2024-08-15',
      url: '/files/sustainability-report-2024.pdf',
      filename: 'sustainability-report-2024.pdf'
    },
  ];

  return (
    <>
      <SubPageHero
        backgroundImage="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b2e65c45b0d8c4610607e7_image.png"
        title="Download all all the files you need"
        description="Get the files of our company you need to boost your business"
        showButtons={true}
      />

      <FileDownloadGrid downloads={mockDownloads} />

      <WhyChooseUs />

    </>
  );
}

export default Downloads;
