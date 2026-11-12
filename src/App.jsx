import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* ================= NAVBAR ================= */}
      <nav className='bg-white/70 backdrop-blur-md shadow-md sticky top-0 z-50'>
        <div className='max-w-6xl mx-auto px-4 py-5 flex items-center justify-between'>
          <a href='#beranda' className='text-xl font-bold text-blue-500'>Humma Technology</a>
 
          <ul className='flex items-center gap-4 md:gap-6 text-gray-950'>
            <li><a href='#beranda' className='hover:text-indigo-600 md:text-lg'>Beranda</a></li>
            <li><a href='#layanan' className='hover:text-indigo-600 md:text-lg'>Layanan</a></li>
            <li><a href='#tentang' className='hover:text-indigo-600 md:text-lg'>Tentang Kami</a></li>
            <li><a href='#kontak' className='hover:text-indigo-600 md:text-lg'>Kontak</a></li>
          </ul>
        </div>
      </nav>
 
      {/* ================= BERANDA (HERO) ================= */}
      <section id='beranda' className='bg-gradient-to-br from-blue-500  via-cyan-500 to-indigo-300 text-white scroll-mt-20'>
        <div className='max-w-6xl mx-auto px-4 py-40 text-center'>
          <span className='inline-block bg-white/20 rounded-full px-4 py-1 text-lg'>
            Jasa pembuatan website untuk bisnis lokal
          </span>
          <h1 className='mt-6 text-4xl md:text-6xl font-extrabold leading-tight'>
            Bikin bisnismu tampil keren di internet
          </h1>
          <p className='mt-6 text-lg text-white/90 max-w-2xl mx-auto'>
            Kami membantu UMKM dan bisnis lokal punya website yang rapi, cepat, dan siap menerima pelanggan baru.
          </p>
          <div className='mt-10 flex flex-wrap justify-center gap-4'>
            <a href='#kontak' className='bg-amber-400 text-gray-900 font-bold rounded-full px-8 py-3 hover:bg-amber-300 shadow-black-100'>
              Konsultasi gratis
            </a>
            <a href='#layanan' className='border-2 border-white rounded-full px-8 py-3 font-semibold hover:bg-white/20'>
              Lihat layanan
            </a>
          </div>
        </div>
      </section>
 
      {/* ================= LAYANAN ================= */}
      <section id='layanan' className='bg-white py-20 '>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-extrabold text-center text-gray-900'>Layanan kami</h2>
          <p className='mt-3 text-center text-gray-600'>Pilih yang paling cocok dengan bisnismu.</p>
 
          <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>

            <div className='bg-sky-50 border-2 border-sky-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition'>
              <div className='size-12 bg-sky-500 rounded-xl flex items-center justify-center text-2xl'>🌐</div>
              <h3 className='mt-4 text-lg font-bold text-gray-900'>Website Company Profile</h3>
              <p className='mt-2 text-sm text-gray-600'>Halaman resmi bisnismu yang rapi dan cepat dibuka di HP.</p>
            </div>
 
            <div className='bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition'>
              <div className='size-12 bg-amber-500 rounded-xl flex items-center justify-center text-2xl'>🛒</div>
              <h3 className='mt-4 text-lg font-bold text-gray-900'>Toko Online</h3>
              <p className='mt-2 text-sm text-gray-600'>Katalog, keranjang, dan pembayaran dalam satu situs milikmu.</p>
            </div>
 
            <div className='bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition'>
              <div className='size-12 bg-emerald-500 rounded-xl flex items-center justify-center text-2xl'>⚙️</div>
              <h3 className='mt-4 text-lg font-bold text-gray-900'>Aplikasi Web Custom</h3>
              <p className='mt-2 text-sm text-gray-600'>Sistem sesuai alur kerjamu: reservasi, stok, atau laporan.</p>
            </div>
 
            <div className='bg-rose-50 border-2 border-rose-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition'>
              <div className='size-12 bg-rose-500 rounded-xl flex items-center justify-center text-2xl'>🎨</div>
              <h3 className='mt-4 text-lg font-bold text-gray-900'>Desain UI/UX</h3>
              <p className='mt-2 text-sm text-gray-600'>Tampilan menarik dan mudah dipakai, dirancang sebelum kode ditulis.</p>
            </div>
          </div>
        </div>
      </section>
 
      {/* ================= TENTANG KAMI ================= */}
      <section id='tentang' className='bg-gradient-to-br from-violet-50 to-sky-50 py-20 scroll-mt-20'>
        <div className='max-w-6xl mx-auto px-4 gap-12 lg:grid-cols-2 items-center'>
          <div>
            <h2 className='text-3xl font-extrabold text-gray-900'>Tentang kami</h2>
            <p className='mt-5 text-gray-600 leading-relaxed text-lg'>
              Humma Technology adalah tim pengembang web yang percaya bahwa website bagus tidak harus rumit atau mahal.
              Kami mengerjakan proyek dari ide sampai tayang, dengan bahasa yang mudah dipahami pemilik bisnis.
            </p>
          </div>
 
          <div className=' gap-4 py-6 sm:grid-cols-2'>
            <div className='bg-sky-100 text-sky-800 rounded-xl px-5 py-4 font-semibold hover:-translate-y-1 hover:shadow-lg transition'>Nyaman di HP, tablet, dan laptop</div>
            <div className='py-4'>
            <div className='bg-amber-100 text-amber-800 rounded-xl px-5 py-4 font-semibold hover:-translate-y-1 hover:shadow-lg transition'>Harga dan jadwal jelas di awal</div>
            </div>
            <div className='py-0'>
            <div className='bg-emerald-100 text-emerald-800 rounded-xl px-5 py-4 font-semibold hover:-translate-y-1 hover:shadow-lg transition'>Kode rapi dan mudah dikembangkan</div>
            </div>
            <div className='py-2'></div>
            <div className='bg-rose-100 text-rose-800 rounded-xl px-5 py-4 font-semibold hover:-translate-y-1 hover:shadow-lg transition'>Bantuan setelah situs tayang</div>
          </div>
        </div>
      </section>
 
      {/* ================= KONTAK ================= */}
      <section id='kontak' className='bg-slate-900 text-white py-20 scroll-mt-20'>
        <div className='max-w-6xl mx-auto px-4 grid gap-12 lg:grid-cols-2'>
          <div>
            <h2 className='text-3xl font-extrabold'>Yuk, mulai dari obrolan singkat</h2>
            <p className='mt-5 text-slate-300 leading-relaxed'>
              Ceritakan bisnis dan kebutuhanmu. Kami balas dalam 1 hari kerja, konsultasi pertama gratis.
            </p>
            <p className='mt-8 font-semibold'>✉️ @hummatech.id</p>
            <p className='mt-3 font-semibold'>💬 0812-0000-0000</p>
          </div>
 
          <div className='bg-white text-gray-800 rounded-2xl p-8 space-y-5'>
            <label className='block'>
              <span className='text-md font-semibold'>Nama</span>
              <input type='text' placeholder='Nama lengkap' className='mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-violet-500 focus:outline-2 focus:outline-violet-300' />
            </label>
            <label className='block'>
              <span className='text-md font-semibold'>Email</span>
              <input type='email' placeholder='nama@email.com' className='mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-violet-500 focus:outline-2 focus:outline-violet-300' />
            </label>
            <label className='block'>
              <span className='text-md font-semibold'>Kebutuhanmu</span>
              <textarea rows='4' placeholder='Contoh: saya ingin website untuk usaha katering' className='mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-violet-500 focus:outline-2 focus:outline-violet-300'></textarea>
            </label>
            <button type='button' className='w-full rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-400 hover:text-white-200 text-white font-bold px-6 py-3 hover:opacity-90'>
              Kirim pesan
            </button>
          </div>
        </div>
      </section>
 
      {/* ================= FOOTER ================= */}
      <footer className='bg-slate-950 text-slate-400 text-center text-sm py-6'>
        &copy; 2026 Humma Technology. Semua hak dilindungi.
      </footer>



    </>
  )
}

export default App
