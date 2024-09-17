import Link from "next/link";
import Image from "next/image";

export default function ImgLink({ url, img, nav, setNav }) {
  return (
    <Link
      onClick={() => setNav(!nav)}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={img} height={25} width={25} />
    </Link>
  );
}
