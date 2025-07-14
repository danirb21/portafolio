import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Technologies() {
  return (
    <section className="max-w-3xl mx-auto text-left mt-8">
      <h2 className="text-2xl font-bold text-green-300 mb-4">Tecnologías</h2>
      <div className="flex items-center gap-3 flex-wrap">
        <Badge title="Java" className="rounded-full px-3 py-1 flex items-center gap-2 bg-purple-500">
          <Image
            src="/java.png"
            alt="java"
            width={35}
            height={35}
          />
        </Badge>

        <Badge title="Python" className="rounded-full px-3 py-1 flex items-center gap-2 bg-yellow-700">
          <Image
            src="/python.svg"
            alt="python"
            width={35}
            height={35}
          />
        </Badge>

        <Badge title="SQL" className="rounded-full px-3 py-1 flex items-center gap-2 bg-gray-400">
          <Image
            src="/sql.svg"
            alt="SQL"
            width={35}
            height={35}
          />
        </Badge>

        <Badge title="Javascript" className="rounded-full px-3 py-1 flex items-center gap-2 bg-yellow-600">
          <Image
            src="/javascript.svg"
            alt="javascript"
            width={35}
            height={35}
          />
        </Badge>

        <Badge title="Android Studio" className="rounded-full px-3 py-1 flex items-center gap-2 bg-green-500">
          <Image
            src="androidstudio.svg"
            alt="android studio"
            width={35}
            height={35}
          />
        </Badge>
        <Badge title="Mysql" className="rounded-full px-3 py-1 flex items-center gap-2 bg-white">
          <Image
            src="mysql.svg"
            alt="mysql"
            width={50}
            height={50}
          />
        </Badge>
         <Badge title="Oracle Apex" className="rounded-full px-3 py-1 flex items-center gap-2 bg-white">
          <Image
            src="/oracle-ar21.svg"
            alt="Oracle Apex"
            width={55}
            height={60}
          />
        </Badge>
        <Badge title="Docker" className="rounded-full px-1 py-1 flex items-center gap-2 bg-blue">
          <Image
            src="/docker.svg"
            alt="Docker"
            width={55}
            height={55}
          />
        </Badge>
      </div>
    </section>
  );
}
