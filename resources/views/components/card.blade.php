{{-- Kartu: <x-bk::card title="Judul" subtitle="Sub judul">isi<x-slot name="actions">...</x-slot></x-bk::card> --}}
@props(['title' => null, 'subtitle' => null, 'footer' => null])
<div {{ $attributes->merge(['class' => 'bk-card']) }}>
    @if ($title || isset($actions))
        <div class="bk-card-header">
            <div>
                @if ($title)<div class="bk-card-title">{{ $title }}</div>@endif
                @if ($subtitle)<div class="bk-card-sub">{{ $subtitle }}</div>@endif
            </div>
            @isset($actions)
                <div class="bk-flex bk-gap-2">{{ $actions }}</div>
            @endisset
        </div>
    @endif
    <div class="bk-card-body">{{ $slot }}</div>
    @if ($footer)
        <div class="bk-card-footer">{{ $footer }}</div>
    @endif
</div>
