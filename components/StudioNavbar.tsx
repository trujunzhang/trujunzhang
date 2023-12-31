import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5 bg-[#101112]">
        <Link href='/'className="text-gray-200 flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-gray-200 mr-2" />
          Go To Portfolio
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar;