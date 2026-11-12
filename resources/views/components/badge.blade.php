{{-- Badge: <x-bk::badge type="success" :dot="true" soft>Aktif</x-bk::badge> --}}
@props(['type' => 'primary', 'dot' => false, 'soft' => false])
@php
    $variant = $soft ? 'bk-badge-soft-' . $type : 'bk-badge-' . $type;
@endphp
<span {{ $attributes->merge(['class' => 'bk-badge ' . $variant]) }}>
    @if ($dot)<span class="bk-badge-dot"></span>@endif
    {{ $slot }}
</span>
