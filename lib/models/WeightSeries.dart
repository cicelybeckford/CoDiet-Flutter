  
import 'package:charts_flutter/flutter.dart' as charts;
import 'package:flutter/cupertino.dart';

class WeightSeries {
  final DateTime date;
  final double weight;
  final charts.Color barColor;

  WeightSeries({
    @required this.date,
    @required this.weight,
    @required this.barColor,
  });
}