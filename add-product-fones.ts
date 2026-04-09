import { drizzle } from 'drizzle-orm/mysql2';
import { products } from './drizzle/schema';

const db = drizzle(process.env.DATABASE_URL!);

async function addProductFones() {
  try {
    console.log('🌱 Adicionando produto na categoria Fones Bluetooth...');
    
    const newProduct = {
      name: 'Fone de Ouvido Bluetooth Xiaomi Redmi Airdots 2',
      description: 'Fone de ouvido Bluetooth com qualidade de som premium, bateria de longa duração e design confortável.',
      price: '35.00',
      imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663217227461/dT6vF4XZLeeasLoqasjZsS/1000214549_a13b394b.webp',
      category: 'Fones Bluetooth',
      stock: 10,
    };

    const result = await db.insert(products).values(newProduct);
    console.log('✅ Produto adicionado com sucesso na categoria Fones Bluetooth!');
    console.log('📦 Produto:', newProduct);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Erro ao adicionar produto:', error);
    process.exit(1);
  }
}

addProductFones();
