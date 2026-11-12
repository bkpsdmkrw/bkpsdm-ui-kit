{{-- Alert: <x-bk::alert type="info|success|warning|danger|primary" title="Judul" dismissible>isi</x-bk::alert> --}}
@props(['type' => 'info', 'title' => null, 'dismissible' => false])
@php
    $icons = [
        'success' => 'check-circle',
        'danger' => 'x-circle',
        'warning' => 'alert',
        'primary' => 'bell',
        'info' => 'info',
    ];
@endphp
<div {{ $attributes->merge(['class' => 'bk-alert bk-alert-' . $type]) }} role="alert">
    <span class="bk-alert-icon"><i data-icon="{{ $icons[$type] ?? 'info' }}"></i></span>
    <div>
        @if ($title)<div class="bk-alert-title">{{ $title }}</div>@endif
        <div class="bk-alert-body">{{ $slot }}</div>
    </div>
    @if ($dismissible)
        <button type="button" class="bk-alert-close" aria-label="Tutup" onclick="this.closest('.bk-alert').remove()"><i data-icon="x"></i></button>
    @endif
</div>
