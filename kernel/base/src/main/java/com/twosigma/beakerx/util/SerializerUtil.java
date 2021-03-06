/*
 * Copyright 2017 TWO SIGMA OPEN SOURCE, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.twosigma.beakerx.util;

public class SerializerUtil {
  /**
   * Get the serialization type-name for the object.  This is usually the class name.
   * If the class is anonymous or inner, walk up the hierarchy to find the ordinary class and use its name.
   * Note: anonymous classes in Scala don't follow the same rules as Java.
   */
  static public String getTypeName(Object object) {
    Class<?> currentClass = object.getClass();
    while (currentClass.getCanonicalName() == null) {
      currentClass = currentClass.getSuperclass();
    }
    return currentClass.getSimpleName();
  }
}
