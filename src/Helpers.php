<?php

namespace Bkpsdm\UiKit;

class Helpers
{
    /** Cache kamus ikon. */
    protected static ?array $icons = null;

    /** Lokasi icons.json hasil build (dipakai bersama npm & Laravel). */
    public static function iconsPath(): string
    {
        return __DIR__ . '/../dist/icons.json';
    }

    /** Baca kamus ikon (67 ikon). */
    public static function icons(): array
    {
        if (static::$icons === null) {
            $path = static::iconsPath();
            static::$icons = is_file($path)
                ? (json_decode((string) file_get_contents($path), true) ?: [])
                : [];
        }

        return static::$icons;
    }

    /** Render ikon sebagai SVG di sisi server (tanpa JS). */
    public static function icon(string $name, string $class = ''): string
    {
        $paths = static::icons();
        if (! isset($paths[$name])) {
            return '';
        }

        $cls = 'bk-icon' . ($class !== '' ? ' ' . $class : '');

        return '<span class="' . htmlspecialchars($cls, ENT_QUOTES) . '" aria-hidden="true">'
            . '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"'
            . ' stroke-linecap="round" stroke-linejoin="round">' . $paths[$name] . '</svg></span>';
    }

    /**
     * Render wadah grafik (canvas) yang diinisialisasi assets/js/charts.js.
     * Dipakai oleh <x-bk::chart> dan directive @bkChart.
     */
    public static function chart(
        string $id,
        string $type = 'line',
        array $labels = [],
        array $data = [],
        $height = 260,
        array $options = []
    ): string {
        $h = is_numeric($height) ? $height . 'px' : $height;

        $attrs = [
            'id' => $id,
            'data-bk-chart' => '1',
            'data-chart-type' => $type,
            'data-chart-labels' => json_encode($labels, JSON_UNESCAPED_UNICODE),
            'data-chart-data' => json_encode($data, JSON_UNESCAPED_UNICODE),
            'data-chart-options' => json_encode($options, JSON_UNESCAPED_UNICODE),
        ];

        $attrStr = '';
        foreach ($attrs as $key => $value) {
            $attrStr .= ' ' . $key . '="' . htmlspecialchars((string) $value, ENT_QUOTES) . '"';
        }

        return '<div class="bk-chart-box" style="height:' . htmlspecialchars($h, ENT_QUOTES) . '">'
            . '<canvas' . $attrStr . ' role="img" aria-label="Grafik"></canvas>'
            . '</div>';
    }

    /**
     * Atribut tema dari sesi/cookie server (dark mode per-sesi).
     * Hasil: data-theme="dark" data-theme-pref="dark" (string kosong bila tak ada).
     * Pakai di layout:  <html lang="id" @bkTheme>
     */
    public static function themeAttr(?string $pref = null): string
    {
        if (! $pref && function_exists('session')) {
            $pref = session('theme');
        }
        if (! $pref && function_exists('request') && request()) {
            $pref = request()->cookie('theme');
        }

        if (! in_array($pref, ['light', 'dark', 'system'], true)) {
            return '';
        }

        // 'system' diresolusi oleh ui-kit.js via prefers-color-scheme.
        $resolved = $pref === 'system' ? 'light' : $pref;

        return 'data-theme="' . $resolved . '" data-theme-pref="' . $pref . '"';
    }

    /** Tautan CSS & JS kit untuk layout Blade. */
    public static function assets(string $base = '/vendor/bkpsdm'): string
    {
        $base = rtrim($base, '/');

        return '<link rel="stylesheet" href="' . htmlspecialchars($base, ENT_QUOTES) . '/ui-kit.css">' . "\n"
            . '<script src="' . htmlspecialchars($base, ENT_QUOTES) . '/ui-kit.js"></script>' . "\n"
            . '<script src="' . htmlspecialchars($base, ENT_QUOTES) . '/charts.js"></script>';
    }
}
