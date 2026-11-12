<?php

namespace Bkpsdm\UiKit;

use Illuminate\Support\ServiceProvider;

class BkpsdmUiKitServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap layanan UI Kit.
     */
    public function boot(): void
    {
        // Daftarkan komponen Blade anonim dengan prefix <x-bk::...>
        $this->loadViewsFrom(__DIR__ . '/../resources/views/components', 'bk');

        // Publikasi aset (CSS & JS) ke public/vendor/bkpsdm
        $this->publishes([
            __DIR__ . '/../assets/css/ui-kit.css'     => public_path('vendor/bkpsdm/ui-kit.css'),
            __DIR__ . '/../assets/js/ui-kit.js'       => public_path('vendor/bkpsdm/ui-kit.js'),
            __DIR__ . '/../assets/js/dashboard.js'    => public_path('vendor/bkpsdm/dashboard.js'),
        ], 'bkpsdm-assets');

        // Publikasi komponen Blade agar bisa dimodifikasi di aplikasi
        $this->publishes([
            __DIR__ . '/../resources/views/components' => resource_path('views/vendor/bkpsdm/components'),
        ], 'bkpsdm-views');
    }

    /**
     * Daftarkan layanan (opsional).
     */
    public function register(): void
    {
        //
    }
}
