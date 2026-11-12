{{-- Ikon SVG inline — dirender oleh ui-kit.js via <i data-icon="..."> --}}
@props(['name' => 'info', 'class' => ''])
<i {{ $attributes->merge(['class' => 'bk-icon ' . $class]) }} data-icon="{{ $name }}" aria-hidden="true"></i>
