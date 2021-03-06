import 'package:charts_flutter/flutter.dart' as charts;
import 'package:codiet/models/WeightSeries.dart';
import 'package:flutter/material.dart';

class WeightJourney extends StatelessWidget {
  final List<WeightSeries> data;

  WeightJourney({@required this.data});

  @override
  Widget build(BuildContext context) {
    List<charts.Series<WeightSeries, DateTime>> series = [
      charts.Series(
        id: "Weight Journey",
        data: data,
        domainFn: (WeightSeries series, _) => series.date,
        measureFn: (WeightSeries series, _) => series.weight,
        colorFn: (WeightSeries series, _) => series.barColor,
      )
    ];
    return Center(
      child: Container(
        height: MediaQuery.of(context).size.height * 0.7,
        width: MediaQuery.of(context).size.width * 0.8,
        padding: EdgeInsets.all(20),
        child: Card(
          child: Padding(
            padding: const EdgeInsets.all(8),
            child: Column(
              children: <Widget>[
                Text("Your Weight Journey", style: const TextStyle(fontSize: 20.0, color: Colors.black)),
                Expanded(
                  child: charts.TimeSeriesChart(series, animate: true,),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}