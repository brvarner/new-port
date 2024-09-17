import Link from "next/link";
import Image from "next/image";

export default function ImgLink({ url, img, nav, setNav, width, height, alt }) {
  return (
    <Link
      onClick={() => setNav(!nav)}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={img} height={height} width={width} alt={alt} />
    </Link>
  );
}
