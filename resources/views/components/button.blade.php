{{-- Tombol: <x-bk::button type="primary|success|info|warning|danger|soft-primary|outline|ghost" size="xs|sm|lg|xl" icon="plus" href="" block /> --}}
@props([
    'type' => 'primary',
    'size' => null,
    'icon' => null,
    'href' => null,
    'block' => false,
])
@php
    $classes = collect(['bk-btn', 'bk-btn-' . $type])
        ->merge($size ? ['bk-btn-' . $size] : [])
        ->merge($block ? ['bk-btn-block'] : [])
        ->implode(' ');
@endphp

@if ($href)
    <a href="{{ $href }}" {{ $attributes->merge(['class' => $classes]) }}>
        @if ($icon)<i data-icon="{{ $icon }}" aria-hidden="true"></i>@endif{{ $slot }}
    </a>
@else
    <button {{ $attributes->merge(['type' => 'button', 'class' => $classes]) }}>
        @if ($icon)<i data-icon="{{ $icon }}" aria-hidden="true"></i>@endif{{ $slot }}
    </button>
@endif
