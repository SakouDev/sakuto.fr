import DialogModal from "@/components/Modal";
import T1 from "@/assets/images/T1.jpg";
import T2 from "@/assets/images/T2.jpg";
import T3 from "@/assets/images/T3.jpg";
import T4 from "@/assets/images/T4.jpg";
import Table from "@/assets/images/Table.png";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-full"> 
     

    <div className="card  h-96">
      <div className="card-body flex flex-col items-center justify-around">
        <h2 className="card-title text-white text-5xl font-medium neon-text mt-2">{`31/12 -> 06/12`}</h2>
       
        <div className="card-actions justify-end">
        <ul className="flex flex-row items-center justify-center gap-20">
          <li>
            <DialogModal
              Image={T1}
              Title="Tier 1"
            />
          </li>
          <li>
            <DialogModal
              Image={T2}
              Title="Tier 2"
            />
          </li>
          <li>
            <DialogModal
              Image={T3}
              Title="Tier 3"
            />
          </li>
          <li>
            <DialogModal
              Image={T4}
              Title="Tier 4"
            />
          </li>
        </ul>
        </div>
        <DialogModal
              Image={Table}
              Title="Tableau avec nom"
            />
      </div>
    </div>

    </div>
  );
}
