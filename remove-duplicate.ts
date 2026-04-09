import { drizzle } from 'drizzle-orm/mysql2';
import { products } from './drizzle/schema';
import { sql } from 'drizzle-orm';

const db = drizzle(process.env.DATABASE_URL!);

async function removeDuplicate() {
  try {
    console.log('🔍 Listando todos os produtos...');
    
    const allProducts = await db.select().from(products);
    console.log(`\n📦 Total de produtos: ${allProducts.length}\n`);
    
    allProducts.forEach((p, i) => {
      console.log(`${i + 1}. ID: ${p.id}, Nome: ${p.name}, Categoria: ${p.category}`);
    });

    // Encontrar e remover a primeira entrada (Acessórios Mobile)
    const xiaomiProducts = allProducts.filter(p => p.name.includes('Xiaomi Redmi Airdots 2'));
    
    if (xiaomiProducts.length > 1) {
      console.log(`\n⚠️  Encontrados ${xiaomiProducts.length} produtos iguais!`);
      console.log(`Removendo a primeira entrada (ID: ${xiaomiProducts[0].id}, Categoria: ${xiaomiProducts[0].category})...`);
      
      // Deletar o primeiro (Acessórios Mobile)
      await db.delete(products).where(sql`id = ${xiaomiProducts[0].id}`);
      
      console.log('✅ Produto duplicado removido com sucesso!');
      console.log(`\n📦 Produtos restantes:`);
      
      const remaining = await db.select().from(products);
      remaining.forEach((p, i) => {
        console.log(`${i + 1}. ID: ${p.id}, Nome: ${p.name}, Categoria: ${p.category}`);
      });
    } else {
      console.log('\n✅ Nenhum duplicado encontrado!');
    }
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Erro:', error);
    process.exit(1);
  }
}

removeDuplicate();
