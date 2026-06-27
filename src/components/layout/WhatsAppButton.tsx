export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/919579814142?text=Hi%20PalaSync%2C%20I%20would%20like%20to%20discuss%20a%20project."

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer group"
      aria-label="Contact us on WhatsApp"
    >
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.371a9.944 9.944 0 004.777 1.21h.005c5.505 0 9.989-4.478 9.99-9.985A9.983 9.983 0 0012.012 2zm5.727 14.153c-.237.669-1.378 1.29-1.928 1.353-.5.058-.962.277-3.14-1.222-2.18-1.5-3.6-3.727-3.71-3.873-.109-.147-.887-1.183-.887-2.268 0-1.085.568-1.616.772-1.826.204-.21.444-.262.593-.262.148 0 .296.002.426.007.135.006.316-.051.493.382.18.441.618 1.505.671 1.615.054.109.09.237.018.382-.072.146-.109.237-.218.364-.11.127-.229.283-.327.382-.109.11-.223.23-.096.447.127.217.564.93 1.21 1.505.831.74 1.53.967 1.747 1.077.217.11.344.09.472-.058.127-.148.547-.638.694-.856.147-.218.293-.182.493-.109.2.073 1.272.6 1.491.709.219.11.364.164.418.255.055.091.055.528-.182 1.197z" />
      </svg>
      <span className="absolute right-14 bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
        Usually responds in 1 hour
      </span>
    </a>
  )
}
