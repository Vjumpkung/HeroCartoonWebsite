import "lazysizes";
import Link from "next/link";
const navigation = [
  { name: "หน้าแรก", href: "/", current: false },
  { name: "สินค้า", href: "/products", current: false },
  { name: "เกี่ยวกับ", href: "/about", current: false },
];
export default function Footer() {
  return (
    <>
      <div className="bg-gray-800">
        <div className="md:container md:mx-auto text-white">
          <div className="flex flex-wrap  overflow-hidden  justify-center">
            <div className=" w-full overflow-hidden md:w-1/2  lg:w-1/2  xl:w-1/4 ">
              <img
                className="hidden lg:block h-8 w-auto mx-auto pt-2"
                src="/logo.png"
                alt="Hero Cartoon Tshirt"
                width="199.42"
                height="32"
                loading="lazy"
              />
              <div className="flex">
                <div className="mx-auto my-2">
                  <p className="text-left my-2 mx-2">
                    มาย้อนเวลาคิดถึงความสุขในวัยเด็กกับเสื้อยืดฮีโร่การ์ตูน
                    เสื้อยืดสกรีนลายด้วยระบบดิจิตอลในรูปแบบของฮีโร่โทคุซัทสึ
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-full overflow-hidden md:w-1/2  lg:w-1/2  xl:w-1/4 ">
              <p className="text-2xl my-1 text-center font-bold underline">
                Navigation
              </p>
              <div className="flex h-3/5">
                <div className="m-auto">
                  <p className="text-justify my-1 text-lg">
                    {navigation.map((item) => (
                      <Link href={item.href} prefetch={false}>
                        <a>
                          <span>• {item.name}</span>
                          <br />
                        </a>
                      </Link>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            <div className="  w-full overflow-hidden  md:w-1/2  lg:w-1/2  xl:w-1/4">
              <p className="text-2xl my-2 text-center font-bold underline">
                ติดต่อเรา
              </p>
              <a href="tel:0948541177">
                <p className="text-xl my-2 text-center ">
                  <span className="icon-phone"></span> : 0948541177
                </p>
              </a>
              <a href="https://www.facebook.com/herocartoontshirt">
                <p className="text-xl my-2 text-center text-blue-500">
                  <span className="icon-facebook2"></span> : เสื้อยืด Hero
                  Cartoon
                </p>
              </a>
              <a href="https://line.me/R/ti/p/%40004ktxqi">
                <p className="text-xl my-2 text-center text-green-500">
                  <span className="icon-line"></span> : @herocartoon
                </p>
              </a>
              <a href="https://herocartoontshirt.com">
                <p className="text-xl my-2 text-center text-red-500">
                  <span className="icon-earth"></span> : herocartoontshirt.com
                </p>
              </a>
            </div>
            <div className="w-full overflow-hidden  md:w-1/2  lg:w-1/2  xl:w-1/4 ">
              <div className="my-2">
                <p className="text-xl my-2 text-center ">
                  <span className="icon-facebook2"></span> Facebook
                </p>
                <center>
                  <iframe
                    data-src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fherocartoontshirt%2F&tabs&width=300&height=200&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=196640848959446"
                    width="300"
                    height="200"
                    className="facebook lazyload"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-2">
        <p className="text-center font-bold text-white">
          © VjumpKunG Made with ❤️ Next.JS + Tailwind
        </p>
      </div>
    </>
  );
}
