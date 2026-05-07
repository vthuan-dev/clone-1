const providers = [
  'BBIN','JDB','JILI','SA','FC','CQ9','PG','R88',
  'BENG','NETENT','PP','VA','G3','VR','MG','EVO',
]

export default function Providers() {
  return (
    <section className="bg-[#111] py-8">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-7">
          <h2 className="text-white text-[20px] font-extrabold uppercase tracking-wide">
            NHÀ CUNG CẤP
          </h2>
          <div className="w-14 h-[3px] bg-[#f97316] mx-auto mt-2 rounded-full" />
        </div>

        <div className="flex flex-wrap gap-3 justify-center items-center">
          <img
            src="/images/ft.png"
            alt="Nhà cung cấp"
            className="w-full max-w-[1100px] object-contain block mx-auto"
          />
        </div>
      </div>
    </section>
  )
}
