import { Card, Select, Button } from '@shopify/polaris';
import { useState } from 'react';

const options = [
  { label: '订单', value: 'orders' },
  { label: '客户', value: 'customers' },
  { label: '商品', value: 'products' },
];

export default function SimpleExport() {
  const [type, setType] = useState('orders');

  const handleExport = () => {
    window.location.href = `/api/export?type=${type}`;
  };

  return (
    <Card sectioned>
      <Select
        label="选择导出数据类型"
        options={options}
        onChange={setType}
        value={type}
      />
      <Button onClick={handleExport} primary style={{ marginTop: 16 }}>
        导出全部字段
      </Button>
    </Card>
  );
}
