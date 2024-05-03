import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:jwt_decoder/jwt_decoder.dart';
import 'package:road_safe_app/config.dart';
import 'package:road_safe_app/utils/app_drawer.dart';
import 'package:http/http.dart' as http;
import 'package:flutter_slidable/flutter_slidable.dart';
import 'package:intl/intl.dart';

class my_complaint extends StatefulWidget {
  final token;
  const my_complaint({@required this.token, Key? key}) : super(key: key);

  @override
  State<my_complaint> createState() => _my_complaintState();
}

class _my_complaintState extends State<my_complaint> {
  List? items;
  List? cnt;

  late String email;
  late String Uid;

  @override
  void initState() {
    super.initState();

    Map<String, dynamic> jwtDecodedToken = JwtDecoder.decode(widget.token);
    email = jwtDecodedToken['email'];
    print("my_complaints");
    print(email);
    Uid = jwtDecodedToken['_id'];
    print("my_complaints");
    print(Uid);
    getComplaintDetails(email);
  }

  void getComplaintDetails(email) async {
    var reqBody = {"email": email};

    var response = await http.post(Uri.parse(getComplaintData),
        headers: {"Content-Type": "application/json"},
        body: jsonEncode(reqBody));

    var jsonResponse = jsonDecode(response.body);

    items = jsonResponse['success'];
    print("below is response body");
    print(jsonResponse);
    print("below is items body");
    print(items);

    cnt = jsonResponse['count'];
    print("below is cnt body");
    print(cnt);
    print(cnt![0]);

    setState(() {});
  }

  void deleteItem(id) async {
    var reqBody = {"id": id};

    var response = await http.post(Uri.parse(deleteComplaints),
        headers: {"Content-Type": "application/json"},
        body: jsonEncode(reqBody));

    var jsonResponse = jsonDecode(response.body);

    print(jsonResponse);

    if (jsonResponse['status']) {
      getComplaintDetails(email);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
            title: const Text("Complaint Status"),
            backgroundColor: Colors.amber),
        drawer: const AppDrawer(),
        body: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              child: Padding(
                padding: EdgeInsets.all(12.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    if (cnt != null && cnt!.isNotEmpty)
                      Text(
                        'Total number of Complaint raised : ${cnt![0]}',
                        style: TextStyle(fontSize: 17),
                      ),
                    if (cnt != null && cnt!.isNotEmpty)
                      Text('Total number of Completed : ${cnt![1]}',
                          style: TextStyle(fontSize: 17)),
                    if (cnt != null && cnt!.isNotEmpty)
                      Text('Total number of Inprocess raised : ${cnt![2]}',
                          style: TextStyle(fontSize: 17)),
                  ],
                ),
              ),
            ),
            Expanded(
              child: Container(
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: items == null
                      ? null
                      : ListView.builder(
                          itemCount: items!.length,
                          itemBuilder: (context, int index) {
                            return Slidable(
                              key: const ValueKey(0),
                              endActionPane: ActionPane(
                                motion: const ScrollMotion(),
                                children: [
                                  SlidableAction(
                                    backgroundColor: Color(0xFFFE4A49),
                                    foregroundColor: Colors.white,
                                    icon: Icons.delete,
                                    label: 'Delete',
                                    onPressed: (BuildContext context) {
                                      print('${items![index]['_id']}');
                                      deleteItem('${items![index]['_id']}');
                                    },
                                  ),
                                ],
                              ),
                              child: Card(
                                // borderOnForeground: false,
                                child: ListTile(
                                  // leading: Icon(Icons.task),
                                  title: Image.memory(
                                    base64Decode(items![index][
                                        'image']), // Convert base64 string to bytes
                                    width:
                                        50, // Set width and height according to your preference
                                    height: 150,
                                    fit: BoxFit.cover,
                                  ),
                                  subtitle: Column(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: [
                                      RichText(
                                        text: TextSpan(
                                          text: 'Complaint Id : ',
                                          style: TextStyle(
                                            fontWeight: FontWeight
                                                .bold, // Make the "Email :" text bold
                                            fontSize: 16, // Set the font size
                                            color: Colors.black,
                                          ),
                                          children: <TextSpan>[
                                            TextSpan(
                                              text: '${items![index]['_id']}',
                                              style: TextStyle(
                                                fontWeight: FontWeight
                                                    .normal, // Keep the email text normal
                                                fontSize:
                                                    16, // Set the font size
                                                color: Colors.black,
                                              ),
                                            ),
                                          ],
                                        ),
                                      ),
                                      Text(
                                          'Address : ${items![index]['location']}'),
                                      Text(
                                          'Category : ${items![index]['category'][0]}'),
                                      Text(
                                          'Description : ${items![index]['description']}'),
                                      Text(
                                          'Date : ${DateFormat('yyyy-MM-dd HH:mm:ss').format(DateTime.parse(items![index]['createdAt']).toLocal())}'),
                                      SizedBox(height: 8),
                                      Container(
                                        padding: EdgeInsets.all(8),
                                        decoration: BoxDecoration(
                                          color: Colors.amber,
                                          borderRadius: BorderRadius.circular(
                                              10), // Add border radius
                                        ),
                                        // isComplaintRaised ? 'Complaint raised!' : 'No complaint raised',
                                        child: Text(
                                          ("${items![index]['status']}" ==
                                                  'Update Status')
                                              ? "Complaint raised!"
                                              : "${items![index]['status']}",
                                          style: TextStyle(color: Colors.black),
                                        ),
                                      ),
                                    ],
                                  ),
                                  trailing: Icon(Icons.arrow_back),
                                ),
                              ),
                            );
                          }),
                ),
              ),
            )
          ],
        ));
  }
}