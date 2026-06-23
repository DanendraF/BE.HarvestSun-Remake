import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

const cropTypes = [
  { name: 'Padi', variety: 'IR64', season: 'Penghujan/Kemarau' },
  { name: 'Padi', variety: 'Ciherang', season: 'Penghujan/Kemarau' },
  { name: 'Padi', variety: 'Inpari 32', season: 'Penghujan/Kemarau' },
  { name: 'Padi', variety: 'Inpari 42', season: 'Penghujan/Kemarau' },
  { name: 'Padi', variety: 'Mapan 05', season: 'Penghujan/Kemarau' },
  { name: 'Jagung', variety: 'Bisi 18', season: 'Kemarau' },
  { name: 'Jagung', variety: 'NK 212', season: 'Kemarau' },
  { name: 'Jagung', variety: 'Pioneer 35', season: 'Kemarau' },
  { name: 'Kedelai', variety: 'Anjasmoro', season: 'Kemarau' },
  { name: 'Kedelai', variety: 'Grobogan', season: 'Kemarau' },
  { name: 'Bawang Merah', variety: 'Bima Brebes', season: 'Kemarau' },
  { name: 'Bawang Merah', variety: 'Tajuk', season: 'Kemarau' },
  { name: 'Cabai Rawit', variety: 'Ori 212', season: 'Sepanjang Tahun' },
  { name: 'Cabai Rawit', variety: 'Kaliber', season: 'Sepanjang Tahun' },
  { name: 'Cabai Merah', variety: 'TM 999', season: 'Sepanjang Tahun' },
  { name: 'Tomat', variety: 'Servo', season: 'Sepanjang Tahun' },
  { name: 'Tomat', variety: 'Gustavi', season: 'Sepanjang Tahun' },
  { name: 'Kentang', variety: 'Granola', season: 'Sepanjang Tahun' },
  { name: 'Kopi', variety: 'Robusta', season: 'Tahunan' },
  { name: 'Kopi', variety: 'Arabica', season: 'Tahunan' },
  { name: 'Kakao', variety: 'MCC 01', season: 'Tahunan' },
  { name: 'Tebu', variety: 'Bululawang', season: 'Tahunan' },
  { name: 'Singkong', variety: 'Gajah', season: 'Sepanjang Tahun' },
  { name: 'Kacang Tanah', variety: 'Kelinci', season: 'Kemarau' }
];

const activityTypes = [
  { name: 'Pengolahan Lahan', category: 'Persiapan', icon: 'shovel' },
  { name: 'Penanaman', category: 'Persiapan', icon: 'seedling' },
  { name: 'Irigasi / Penyiraman', category: 'Perawatan', icon: 'droplet' },
  { name: 'Pemupukan', category: 'Perawatan', icon: 'sprout' },
  { name: 'Pengendalian Hama & Penyakit', category: 'Perawatan', icon: 'bug' },
  { name: 'Penyiangan Gulma', category: 'Perawatan', icon: 'scissors' },
  { name: 'Pemantauan', category: 'Observasi', icon: 'eye' },
  { name: 'Panen', category: 'Pemanenan', icon: 'tractor' },
  { name: 'Pasca Panen', category: 'Pemanenan', icon: 'box' }
];

async function main() {
  console.log('Seeding Master Data...');

  // Delete existing data to avoid duplicates on multiple runs
  await prisma.cropType.deleteMany();
  await prisma.activityType.deleteMany();

  console.log('Seeding Crop Types...');
  for (const crop of cropTypes) {
    await prisma.cropType.create({
      data: crop,
    });
  }

  console.log('Seeding Activity Types...');
  for (const activity of activityTypes) {
    await prisma.activityType.create({
      data: activity,
    });
  }

  console.log('Master data seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
