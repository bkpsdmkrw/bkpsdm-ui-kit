{{-- Ikon SVG dirender server-side dari dist/icons.json (dan fallback ke ui-kit.js) --}}
@props(['name' => 'info', 'class' => ''])
@php($svg = \Bkpsdm\UiKit\Helpers::icon($name, $class))
@if ($svg)
    {!! $svg !!}
@else
    <i {{ $attributes->merge(['class' => 'bk-icon ' . $class]) }} data-icon="{{ $name }}" aria-hidden="true"></i>
@endif
