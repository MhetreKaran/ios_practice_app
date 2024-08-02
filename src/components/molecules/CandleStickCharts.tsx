import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CandlestickChart } from 'react-native-wagmi-charts';

const data = [
  {
    timestamp: 1625945400000,
    open: 33575.25,
    high: 33600.52,
    low: 33475.12,
    close: 33520.11,
  },
  {
    timestamp: 1625946300000,
    open: 33545.25,
    high: 33560.52,
    low: 33510.12,
    close: 33520.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33545.52,
    low: 33400.12,
    close: 33450.11,
  },
  {
    timestamp: 1625948100000,
    open: 33315.25,
    high: 33430.52,
    low: 33300.12,
    close: 33420.11,
  },
  {
    timestamp: 1625945400000,
    open: 33250.25,
    high: 33235.52,
    low: 33390.12,
    close: 33380.11,
  },
  {
    timestamp: 1625946300000,
    open: 33245.25,
    high: 33290.52,
    low: 33350.12,
    close: 33320.11,
  },
  {
    timestamp: 1625947200000,
    open: 33310.25,
    high: 33380.52,
    low: 33290.12,
    close: 33360.11,
  },
  {
    timestamp: 1625948100000,
    open: 33325.25,
    high: 33430.52,
    low: 33315.12,
    close: 33420.11,
  },
  {
    timestamp: 1625945400000,
    open: 33475.25,
    high: 33490.52,
    low: 33395.12,
    close: 33420.11,
  },
  {
    timestamp: 1625946300000,
    open: 33445.25,
    high: 33560.52,
    low: 33410.12,
    close: 33520.11,
  },
  {
    timestamp: 1625947200000,
    open: 33410.25,
    high: 33415.52,
    low: 33330.12,
    close: 33350.11,
  },
  {
    timestamp: 1625948100000,
    open: 33315.25,
    high: 33380.52,
    low: 33295.12,
    close: 33360.11,
  },
  {
    timestamp: 1625945400000,
    open: 33475.25,
    high: 33400.52,
    low: 33485.12,
    close: 33420.11,
  },
  {
    timestamp: 1625946300000,
    open: 33445.25,
    high: 33460.52,
    low: 33410.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33320.25,
    high: 33345.52,
    low: 33370.12,
    close: 33360.11,
  },
  {
    timestamp: 1625947200000,
    open: 33310.25,
    high: 33315.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33330.52,
    low: 33215.12,
    close: 33320.11,
  },
  {
    timestamp: 1625945400000,
    open: 33575.25,
    high: 33600.52,
    low: 33475.12,
    close: 33520.11,
  },
  {
    timestamp: 1625946300000,
    open: 33545.25,
    high: 33560.52,
    low: 33510.12,
    close: 33520.11,
  },
  {
    timestamp: 1625947200000,
    open: 33410.25,
    high: 33415.52,
    low: 33350.12,
    close: 33350.11,
  },
  {
    timestamp: 1625947200000,
    open: 33310.25,
    high: 33315.52,
    low: 33350.12,
    close: 33350.11,
  },
  {
    timestamp: 1625948100000,
    open: 33365.25,
    high: 33380.52,
    low: 33355.12,
    close: 33350.11,
  },
  {
    timestamp: 1625945400000,
    open: 33475.25,
    high: 33500.52,
    low: 33475.12,
    close: 33520.11,
  },{
    timestamp: 1625947200000,
    open: 33410.25,
    high: 33415.52,
    low: 33350.12,
    close: 33350.11,
  },
  {
    timestamp: 1625948100000,
    open: 33315.25,
    high: 33330.52,
    low: 33285.12,
    close: 33420.11,
  },
  {
    timestamp: 1625945400000,
    open: 33575.25,
    high: 33600.52,
    low: 33475.12,
    close: 33520.11,
  },
  {
    timestamp: 1625946300000,
    open: 33545.25,
    high: 33560.52,
    low: 33310.12,
    close: 33320.11,
  },
  {
    timestamp: 1625947200000,
    open: 33410.25,
    high: 33515.52,
    low: 33350.12,
    close: 33250.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625945400000,
    open: 33575.25,
    high: 33600.52,
    low: 33475.12,
    close: 33520.11,
  },


];

const CandleStickCharts = () => {
    
  return (
    <CandlestickChart.Provider data={data} >
    <CandlestickChart  width={350}  style={{marginTop:20,paddingHorizontal:10}}>
      <CandlestickChart.Candles />
      <CandlestickChart.Crosshair >
      <CandlestickChart.Tooltip  />
        </CandlestickChart.Crosshair>
    </CandlestickChart>
    <CandlestickChart.PriceText precision={4} />
  </CandlestickChart.Provider>
  )
}

export default CandleStickCharts

const styles = StyleSheet.create({})