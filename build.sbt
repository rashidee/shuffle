name := """angularui-play"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.11.1"

libraryDependencies ++= Seq(
  javaJdbc,
  javaEbean,
  cache,
  javaWs,
  "com.google.code.gson" % "gson" % "2.2.4",
   "com.github.fge" % "json-schema-validator" % "2.1.8",
    "org.mongodb" % "mongo-java-driver" % "2.12.0-rc3",
    "commons-io" % "commons-io" % "2.3"
)
