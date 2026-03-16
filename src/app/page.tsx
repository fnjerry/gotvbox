import Link from 'next/link';
import { Download, Tv, Zap, Clock, Film, Check } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Tv className="w-8 h-8 text-red-500" />
            <span className="text-2xl font-bold">GoTV</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-red-500 transition">首页</Link>
            <Link href="#features" className="hover:text-red-500 transition">功能介绍</Link>
            <Link href="#download" className="hover:text-red-500 transition">下载安装</Link>
            <Link href="#contact" className="hover:text-red-500 transition">联系我们</Link>
          </nav>
          <Link 
            href="#download" 
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full font-semibold transition"
          >
            免费试看
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            看到全世界
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            GoTV已提供10年稳定服务，30000+用户尽享全球电视直播
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <Link 
              href="#download" 
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-lg font-semibold transition inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              立即下载
            </Link>
            <Link 
              href="#features" 
              className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition"
            >
              了解更多
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-red-500">10年+</div>
              <div className="text-gray-400">稳定运行</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500">700+</div>
              <div className="text-gray-400">高清频道</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500">30000+</div>
              <div className="text-gray-400">用户信赖</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">核心优势</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 p-8 rounded-2xl">
              <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mb-4">
                <Tv className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">1080P+H265</h3>
              <p className="text-gray-400">
                采用1080P和H265的组合技术，提供极高清晰度的同时，大幅降低带宽占用，使卡顿大量减少
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">极速换台</h3>
              <p className="text-gray-400">
                智能分类，精准选台，无需大海捞针。无缓冲时间，切换频道零等待
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">七天回看</h3>
              <p className="text-gray-400">
                全部频道支持回看7天内的所有节目，EPG节目表助您不再错过任何精彩瞬间
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mb-4">
                <Film className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">海量点播</h3>
              <p className="text-gray-400">
                40000+部海量资源，汇聚全网影视，无广告、无限制、无额外付费
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Channels Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">频道覆盖全球</h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            为您提供来自120多个国家和地区的700+电视直播高清频道
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['欧美频道', '港台频道', '大陆频道', '日韩频道', '体育频道', '电影频道', '新闻频道', '少儿频道'].map((category) => (
              <div key={category} className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition cursor-pointer">
                <span className="font-semibold">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">四大平台 全面支持</h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            一个账号通行所有主流设备
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Android', icon: '📱', desc: 'Android 5.0+' },
              { name: 'iOS', icon: '🍎', desc: 'iOS 10+' },
              { name: 'Windows', icon: '💻', desc: 'Windows 10+' },
              { name: 'macOS', icon: '🖥️', desc: 'macOS 10+' },
            ].map((platform) => (
              <div key={platform.name} className="bg-gray-900 p-8 rounded-2xl text-center hover:scale-105 transition">
                <div className="text-5xl mb-4">{platform.icon}</div>
                <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                <p className="text-gray-400 mb-6">{platform.desc}</p>
                <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full font-semibold transition">
                  下载安装
                </button>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-gray-900 p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Check className="text-green-500" />
              免费试看
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>✓ 无限制观看所有频道</li>
              <li>✓ 可安装在您喜欢的设备上</li>
              <li>✓ 不满意无需付款</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-red-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">立即开始您的电视之旅</h2>
          <p className="text-xl mb-8">10年稳定服务，品质保证，高清高速，永不卡顿</p>
          <Link 
            href="#download" 
            className="bg-white text-red-600 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold transition inline-block"
          >
            立即试看
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Tv className="w-8 h-8 text-red-500" />
                <span className="text-2xl font-bold">GoTV</span>
              </div>
              <p className="text-gray-400">看到全世界，您的海外电视直播首选</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">快速链接</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-red-500 transition">关于我们</Link></li>
                <li><Link href="#" className="hover:text-red-500 transition">使用教程</Link></li>
                <li><Link href="#" className="hover:text-red-500 transition">常见问题</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">联系我们</h4>
              <ul className="space-y-2 text-gray-400">
                <li>客服邮箱：support@gotvbox.com</li>
                <li>工作时间：7×24小时</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-500 pt-8 border-t border-gray-800">
            © 2024 GoTV. All rights reserved. | 累计收视时长已达50,000,000小时
          </div>
        </div>
      </footer>
    </div>
  );
}
