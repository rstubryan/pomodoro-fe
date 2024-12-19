import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqList = [
  {
    question: "Apa itu Workpace?",
    answer:
      "Workpace adalah sebuah platform manajemen tugas yang dirancang untuk membantu Anda meningkatkan produktivitas dan efisiensi waktu dengan mengimplementasikan teknik Pomodoro. Teknik ini memungkinkan Anda untuk fokus bekerja selama waktu tertentu dengan istirahat terjadwal untuk menjaga konsentrasi dan energi.",
  },
  {
    question: "Bagaimana cara kerja teknik Pomodoro di Workpace?",
    answer:
      "Teknik Pomodoro di Workpace membantu Anda membagi pekerjaan menjadi interval waktu yang disebut 'Pomodoro' (biasanya 25 menit) dengan diselingi oleh waktu istirahat singkat (5 menit). Setelah menyelesaikan beberapa Pomodoro, Anda dapat mengambil istirahat lebih lama.",
  },
  {
    question: "Fitur apa saja yang tersedia di Workpace?",
    answer:
      "1. Manajemen Tugas: Tambahkan, edit, dan atur prioritas tugas.\n" +
      "2. Timer Pomodoro: Timer yang dapat disesuaikan untuk sesi kerja dan istirahat.\n" +
      "3. Laporan Produktivitas: Statistik dan laporan harian atau mingguan untuk memantau perkembangan Anda.\n" +
      "4. Kolaborasi Tim: Fitur untuk berbagi tugas dan bekerja bersama tim.\n" +
      "5. Integrasi Kalender: Sinkronisasi dengan kalender untuk mengingatkan tugas atau jadwal penting.",
  },
  {
    question: "Bagaimana cara memulai menggunakan Workpace?",
    answer:
      "Anda dapat memulai dengan membuat akun terlebih dahulu. Setelah itu:\n1. Tambahkan tugas-tugas Anda di dashboard.\n2. Atur waktu Pomodoro sesuai preferensi.\n3. Mulai sesi Pomodoro untuk fokus pada tugas.\n4. Nikmati istirahat setelah setiap sesi.\n5. Lihat laporan produktivitas untuk mengevaluasi kinerja Anda.",
  },
  {
    question: "Apakah Workpace dapat digunakan secara gratis?",
    answer:
      "Ya, Workpace menyediakan versi gratis dengan fitur dasar. Anda juga dapat meng-upgrade ke versi premium untuk menikmati fitur tambahan seperti laporan produktivitas mendalam, kolaborasi tim, dan integrasi dengan alat produktivitas lainnya.",
  },
  {
    question: "Apakah Workpace mendukung perangkat seluler?",
    answer:
      "Tentu saja! Workpace dirancang untuk diakses dari berbagai perangkat, termasuk desktop, tablet, dan smartphone, sehingga Anda dapat mengelola tugas kapan saja dan di mana saja.",
  },
];

export default function FAQ() {
  return (
    <Accordion type="single" collapsible>
      {faqList.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger className={`text-lg font-bold`}>
            {faq.question}
          </AccordionTrigger>
          <AccordionContent>
            {faq.answer.split("\n").map((line, idx) => (
              <p key={idx} className="mb-2">
                {line}
              </p>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
