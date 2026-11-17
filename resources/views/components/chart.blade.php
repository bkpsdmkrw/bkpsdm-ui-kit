{{-- Grafik: <x-bk::chart id="chart-1" type="line" :labels="['Jan','Feb']" :data="[10,20]" :height="260" /> --}}
@props([
    'id' => 'bk-chart-' . uniqid(),
    'type' => 'line',
    'labels' => [],
    'data' => [],
    'height' => 260,
    'options' => [],
])
{!! \Bkpsdm\UiKit\Helpers::chart($id, $type, $labels, $data, $height, $options) !!}
