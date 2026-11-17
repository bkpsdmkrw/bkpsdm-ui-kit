<?php

namespace Bkpsdm\UiKit;

use Illuminate\Support\Facades\Blade;
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
            __DIR__ . '/../assets/css/ui-kit.css'       => public_path('vendor/bkpsdm/ui-kit.css'),
            __DIR__ . '/../assets/js/ui-kit.js'         => public_path('vendor/bkpsdm/ui-kit.js'),
            __DIR__ . '/../assets/js/charts.js'         => public_path('vendor/bkpsdm/charts.js'),
            __DIR__ . '/../assets/js/dashboard.js'      => public_path('vendor/bkpsdm/dashboard.js'),
            __DIR__ . '/../dist/icons.json'             => public_path('vendor/bkpsdm/icons.json'),
        ], 'bkpsdm-assets');

        // Publikasi komponen Blade agar bisa dimodifikasi di aplikasi
        $this->publishes([
            __DIR__ . '/../resources/views/components' => resource_path('views/vendor/bkpsdm/components'),
        ], 'bkpsdm-views');

        $this->registerDirectives();
    }

    /**
     * Directive Blade: @bkTheme, @bkChart, @bkIcon.
     */
    protected function registerDirectives(): void
    {
        // <html lang="id" @bkTheme>
        Blade::directive('bkTheme', function () {
            return '<?php echo \\Bkpsdm\\UiKit\\Helpers::themeAttr(); ?>';
        });

        // @bkChart('chart-1', 'line', ['Jan','Feb'], [10,20], 260)
        Blade::directive('bkChart', function ($expression) {
            return "<?php echo \\Bkpsdm\\UiKit\\Helpers::chart({$expression}); ?>";
        });

        // @bkIcon('graduation', 'bk-stat-icon')
        Blade::directive('bkIcon', function ($expression) {
            return "<?php echo \\Bkpsdm\\UiKit\\Helpers::icon({$expression}); ?>";
        });
    }

    /**
     * Daftarkan layanan (opsional).
     */
    public function register(): void
    {
        //
    }
}
